const step1 = () => {
    return (
        <div className="container">
            <h2>Are you a High School or University student?</h2>
            {/* options */}
            <button className="nxt" onClick={nextStep}>
                Next
            </button>
        </div>
    );
}

export default step1;