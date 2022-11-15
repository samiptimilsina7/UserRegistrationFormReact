export const RegistrationForm=()=>{
    // const a= "Hello world";
    return(
        <section>
            <div className="user-registration-form">
                <div className="input-boxes">
                    <form className="input-box">
                        <div className="form-title"><h1>User Registration Form</h1></div>
                        <div className="input-section">
                            <label for="firstname">First Name</label>
                            <input name="firstname" placeholder="Enter your first name" type="text"/>
                        </div>
                        <div className="input-section">
                            <label for="lastname">Second Name</label>
                            <input name="lastname" placeholder="Enter your last name" type="text"/>
                        </div><div className="input-section">
                            <label for="address">Address</label>
                            <input name="address" placeholder="Enter your address" type="text"/>
                        </div>
                        <div className="input-section">
                            <label for="dateofbirth">Date of Birth</label>
                            <input name="dateofbirth" type="date"/>
                        </div>
                        <div className="input-section">
                            <label for="gender">Gender</label>
                            <select name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="buttons">
                            <button>Submit</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}