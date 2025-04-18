import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getClasses = async (token) => {
  const response = await axios.get(`${apiUrl}/class/getClasses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export const getClassByStudent = async (token) =>{
  const response = await axios.get(`${apiUrl}/class/getClassByStudent`,{
    headers : {
      Authorization : `Bearer ${token}`
    }
  });
  return response;
}
export const getClassespaginate = async (token,page) => {
  const response = await axios.get(`${apiUrl}/class/getClassespaginate?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const createClasse = async (token, data) => {
  const response = await axios.post(`${apiUrl}/class/createClass/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const deleteClass = async (token, id) => {
  const response = await axios.delete(`${apiUrl}/class/deleteClass/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const updateClass = async (token, id, data) => {
  const response = await axios.put(`${apiUrl}/class/updateClass/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getClassesByTeacher = async (token, id) => {
  const response = await axios.get(
    `${apiUrl}/class/getClassesByTeacher/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const getClassesByTeacher_2 = async (token) =>{
    const response = await axios.get(`${apiUrl}/class/getClassesByTeacher_2`,{
        headers : {
            Authorization : `Bearer ${token}`
        }
    });
    return response;
}

export const getClassesAndStudentsByTeacher = async (token) => {
  const response = await axios.get(
    `${apiUrl}/class/getClassesAndStudentsByTeacher`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const getClassesByTeacherAuth = async (token) => {
  const response = await axios.get(`${apiUrl}/class/getClassesByTeacherAuth`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
