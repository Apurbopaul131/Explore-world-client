import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="min-h-screen border-2 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-2xl font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    );
};

export default ErrorPage;