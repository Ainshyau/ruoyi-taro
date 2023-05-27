import Taro from '@tarojs/taro';

type SupportedType = string | number | boolean | null | undefined | Date | { [key: string]: any };
export const setStorageData = async (key: string, data: SupportedType) => {
  try {
    await Taro.setStorage({ key, data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStorageData = async (key: string) => {
  try {
    const { data } = await Taro.getStorage({ key });
    return data;
  } catch (error) {
    return null;
  }
};

export const removeStorageData = async (key: string) => {
  try {
    await Taro.removeStorage({ key });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
