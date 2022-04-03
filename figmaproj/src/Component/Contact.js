
import './contact.css';
import './../index.css'

function Contact() {
    return (



        <div className="flex flex-row  " >


            <div className="flex flex-col min-h-screen justify-between ">

                <div>
                    <div className="p-7 border-b-2 border-r-2">
                        <h2 className="text-2x1 ml-3 text-blue-400">SaaS Kit</h2>

                    </div>
                    <div className="flex items-center mx-5 mb-10 mt-7">
                        <img className="self-center  rounded-full " src="image 2.png" alt="" />
                        <div className="mx-4">
                            <h4>Sierra Ferguson</h4>
                            <p className="text-slate-400">s.ferguson@gmail.com</p>
                        </div>

                    </div>
                    <div className="ml-5 ">
                        <ul className="list-none">
                            <li className="flex items-center p-2">
                                <img src="Vector copie.png" alt="oo" />
                                <h4 className="mx-3">Dashboard</h4>
                            </li>
                            <li className="flex items-center p-2">
                                <img src="nopi.png" alt="" />
                                <h4 className="mx-3">Task</h4>
                            </li>
                            <li className="flex items-center p-2">
                                <img src="cio.png" alt="" />
                                <h4 className="mx-3">Email</h4>
                            </li>
                            <li className="flex items-center p-2">
                                <img src="Vecor.png" alt="" />
                                <h4 className="mx-3">Contact</h4>
                            </li>
                            <li className="flex items-center p-2">
                                <img src="cio.png" alt="" />
                                <h4 className="mx-3">Chat</h4>
                            </li>
                            <li className="flex items-center mb-7 p-2 border-b-2">
                                <img src="cio.png" alt="" />
                                <h4 className="mx-3"> Deals</h4>
                            </li>
                            <li className="flex items-center p-2 mt-4">
                                <img src="Vector copie 2.png" alt="" />
                                <h4 className="mx-3">Settings</h4>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="flex items-center p-5">
                    <img src="cio.png" alt="" />
                    <p className="mx-3">Toggle side bar</p>

                </div>




            </div>


        </div>

    );
}

export default Contact;
