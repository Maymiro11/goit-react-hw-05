import { RotatingLines  } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
      visible={true}
      height="96"
      width="96"
      strokeColor="#0e73a9"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  );
}