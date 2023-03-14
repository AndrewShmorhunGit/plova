import axios from "../axios/index";

export const usersApi = {
  async getById(userId: string, accessToken: string) {
    let getConfig = {
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios(getConfig);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async editProfile(
    userId: string,
    accessToken: string,
    userData: {
      name?: string;
      email?: string;
      phone?: string;
    }
  ) {
    let patchConfig = {
      method: "patch",
      url: `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
      data: userData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios(patchConfig);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
