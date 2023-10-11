


const NotFound = () => {

    var today = new Date();
    return (
        <div className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1 className="text-danger">404 - requested page could not be found!</h1>
                </div>
            </div>
        </div>
    );
}

export default NotFound;