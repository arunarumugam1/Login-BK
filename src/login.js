import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';



export function Login(){

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {Headers:{"enctype":"multipart/form-data"}};

    axios.post('http://localhost:3009/Registration',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Error');
               
            }
            else if(response.data.status === 'Logined'){
                alert('Logined');
                window.location.href="/";
            }
            else{
                alert('Contact Admin');
                
            }
        })
        .catch(function(error){
            alert('Error');
        })

    }
    return(
        <>
   
        <div className='container'>
            <div className='row'>
               <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        <form class="login-form" action="javascript:void(0);" onSubmit={handlesubmit}>
                            <h1>Login</h1>
                                <div className="form-input-material">
                                    <label for="username">Username</label>&nbsp;
                                    <input type="text" name="username" id="username" placeholder=" " autocomplete="off" class="form-control-material" required /> 
                                </div>
                                <div className="form-input-material">
                                    <label for="password">Password</label>&nbsp;
                                    <input type="password" name="password" id="password" placeholder=" " autocomplete="off" class="form-control-material" required />
                                </div>
                            <button type="submit" class="btn btn-primary btn-ghost">Login</button>
                        </form>
                    </div>
                <div className='col-lg-1'></div>
            </div>
        </div> 
    
        </>
    )
}