import React from "react";
import Popper from "../../components/UI/popper";

const Notification = (props) => {
    return (
        <div className="relative">
            { props.notifications.length > 0 ?
                <div className="bg-gray-dark text-2xs absolute right-0 w-4 h-4 flex justify-center items-center rounded-full z-10 transform -translate-y-2">{props.notifications.length}</div>:""
            }
            <Popper name={<p>Updates</p>} right>
                <div className="flex flex-col">
                    {props.notifications.map(notifiction => 
                        <p className="pb-2 border-b border-gray-mid">{notifiction}</p>
                    )}
                </div>
            </Popper>
        </div>
    );
}

export default Notification;