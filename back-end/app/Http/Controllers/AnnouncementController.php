<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Announcement;
use Exception;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AnnouncementController extends Controller
{
    public function getAnnouncements()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if($user->role === 'admin'){
                $announcements = Announcement::with('admin')
                                            ->latest()
                                            ->paginate(3);

                return response()->json([
                    "announcements" => $announcements,
                ]);
            }

            $students_ann = Announcement::where("receiver", "students")
                ->latest()
                ->get();

            $teachers_ann = Announcement::where("receiver", "teachers")
                ->latest()
                ->get();

            if ($students_ann || $teachers_ann) {
                if ($user->role === 'student') {
                    return response()->json([
                        "announcements" => $students_ann
                    ]);
                }

                if ($user->role === 'teacher') {
                    return response()->json([
                        "announcements" => $teachers_ann
                    ]);
                }

                return response()->json([
                    "message" => "Unauthorized!"
                ]);
            } else {
                return response()->json([
                    'message' => 'No announcement available'
                ], 404);
            }
        } catch (Exception $ex) {
            return response()->json([
                "message" => $ex->getMessage(),
            ], 500);
        }
    }
    public function getAnnouncementsPaginate()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        
            $students_ann = Announcement::with("admin")->where("receiver", "students")
                ->latest()
                ->paginate(3);

            $teachers_ann = Announcement::with("admin")->where("receiver", "teachers")
                ->latest()
                ->paginate(3);
            if ($students_ann || $teachers_ann) {
                if ($user->role === 'student') {
                    return response()->json([
                        "announcements" => $students_ann,
                    ]);
                }

                if ($user->role === 'teacher') {
                    return response()->json([
                        "announcements" => $teachers_ann
                    ]);
                }

                return response()->json([
                    "message" => "Unauthorized!"
                ]);
            } else {
                return response()->json([
                    'message' => 'No announcement available'
                ], 404);
            }
        } catch (Exception $ex) {
            return response()->json([
                "message" => $ex->getMessage(),
            ], 500);
        }
    }
    

    public function createAnnouncement(Request $request)
{
    try {
        $user = JWTAuth::parseToken()->authenticate();

        $admin = Admin::where('user_id',$user->id)->first();

        $request->validate([
            "receiver" => "required|in:students,teachers",
            "title" => "required|string|max:30",
            "message" => "required|string|max:300",
        ]);

        Announcement::create([
            "receiver" => $request->receiver,
            "title" => $request->title,
            "message" => $request->message,
            "admin_id" => $admin->id,
        ]);

        return response()->json([
            "message" => "New announcement created successfully!"
        ]);
    } catch (Exception $ex) {
        return response()->json([
            "message" => $ex->getMessage(),
        ], 500);
    }
}


    public function deleteAnnouncement($id)
    {
        try {
            $announcement = Announcement::find($id);
            if ($announcement) {
                $announcement->delete();
                return response()->json([
                    "message" => "Announcement deleted Successfully!"
                ]);
            } else {
                return response()->json([
                    "message" => "Announcement not found"
                ],404);
            }
        } catch (Exception $ex) {
            return response()->json([
                "message" => $ex->getMessage(),
            ], 500);
        }
    }
}
