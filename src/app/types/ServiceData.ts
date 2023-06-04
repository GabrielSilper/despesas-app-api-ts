import TypeError from "./TypeError";

type ServiceData<T> = {
  type?: TypeError;
  status: number;
  message: T;
};

export default ServiceData;
