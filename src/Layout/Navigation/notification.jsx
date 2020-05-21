import React from "react";
import Dropdown from "./Dropdown";

const icon = 
<svg className="md:h-5 h-4 hover:text-orange-mid" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.2052 13.2256C25.2052 11.8188 24.1445 10.6558 22.781 10.4925V3.43179C22.781 2.99948 22.5006 2.63341 22.0831 2.52091C21.6658 2.40853 21.2394 2.58397 21.0222 2.95765C19.5307 5.5237 17.1816 7.27763 14.04 8.17084C11.6644 8.84623 9.70408 8.74834 9.68516 8.7472C9.65639 8.74555 9.62779 8.74692 9.59946 8.74977H4.57636C2.05297 8.74977 0 10.8027 0 13.3261C0 15.7029 1.82148 17.6616 4.1417 17.8813L5.65677 24.1114C5.85736 24.9363 6.59039 25.5124 7.43936 25.5124H8.49089C9.0574 25.5124 9.58311 25.257 9.93322 24.8115C10.2833 24.3661 10.4073 23.7949 10.2735 23.2444L8.97438 17.9024H9.59853C9.62697 17.9053 9.65568 17.9067 9.68466 17.9051C9.70413 17.904 11.6644 17.806 14.04 18.4814C17.1815 19.3746 19.5307 21.1286 21.0222 23.6945C21.1956 23.993 21.5024 24.165 21.8314 24.165C21.9145 24.165 21.999 24.154 22.0831 24.1313C22.5006 24.0188 22.781 23.6528 22.781 23.2205V16.1597C24.1445 15.9964 25.2052 14.8334 25.2052 13.4266V13.2256ZM9.03788 22.7924L9.21063 23.5029C9.26472 23.7252 9.21468 23.9558 9.07326 24.1357C8.93194 24.3156 8.71965 24.4187 8.49089 24.4187H7.43936C7.09652 24.4187 6.80055 24.1861 6.71956 23.853L5.27248 17.9025H7.84875L8.23501 19.4909H7.9736C7.67156 19.4909 7.42673 19.7357 7.42673 20.0378C7.42673 20.3398 7.67156 20.5846 7.9736 20.5846H8.50095L8.77187 21.6986H8.60048C8.29845 21.6986 8.05361 21.9435 8.05361 22.2455C8.05361 22.5475 8.29845 22.7924 8.60048 22.7924H9.03788ZM9.10727 14.488H5.70866C5.40663 14.488 5.16179 14.7329 5.16179 15.0349C5.16179 15.3369 5.40663 15.5818 5.70866 15.5818H9.10727V16.8087H8.30834C8.29834 16.8082 8.28838 16.8075 8.27821 16.8075H4.57636C4.57116 16.8075 4.56602 16.8082 4.56083 16.8084C2.6477 16.7999 1.09375 15.2412 1.09375 13.3261C1.09375 11.4058 2.65606 9.84352 4.57636 9.84352H9.10727V14.488ZM21.6871 11.019V15.6332V22.6862C20.0483 20.1375 17.5061 18.3214 14.3021 17.4189C12.5281 16.9192 10.9959 16.8194 10.201 16.8064V15.0349V9.84581C10.996 9.83285 12.5283 9.73299 14.3021 9.23331C17.5061 8.33075 20.0483 6.5148 21.6871 3.96603V11.019ZM24.1114 13.4266C24.1114 14.2291 23.539 14.9004 22.7809 15.0535V11.5987C23.5389 11.7518 24.1114 12.4231 24.1114 13.2256V13.4266Z" />
    <path d="M25.369 10.1347C25.5005 10.1347 25.6323 10.0877 25.7371 9.99222L27.3144 8.55569C27.5377 8.35231 27.5539 8.00646 27.3505 7.78312C27.1472 7.55983 26.8013 7.5437 26.578 7.74703L25.0007 9.1835C24.7774 9.38688 24.7612 9.73273 24.9646 9.95607C25.0725 10.0746 25.2205 10.1347 25.369 10.1347Z" />
    <path d="M25.7371 16.6591C25.5138 16.4558 25.168 16.4719 24.9646 16.6952C24.7612 16.9185 24.7774 17.2644 25.0007 17.4678L26.578 18.9043C26.6829 18.9998 26.8147 19.0468 26.9461 19.0468C27.0946 19.0468 27.2426 18.9867 27.3505 18.8682C27.5539 18.6449 27.5377 18.299 27.3144 18.0956L25.7371 16.6591Z" />
    <path d="M27.4531 12.7793H26.2419C25.9399 12.7793 25.6951 13.0241 25.6951 13.3262C25.6951 13.6282 25.9399 13.873 26.2419 13.873H27.4531C27.7551 13.873 28 13.6282 28 13.3262C28 13.0241 27.7551 12.7793 27.4531 12.7793Z" />
    <path d="M3.96039 14.826C3.94672 14.7926 3.92977 14.7609 3.91008 14.7314C3.88984 14.7013 3.86742 14.6734 3.84227 14.6482C3.81656 14.6231 3.78867 14.6001 3.75859 14.5804C3.72906 14.5607 3.69734 14.5438 3.66453 14.5301C3.63117 14.5164 3.59672 14.5061 3.56227 14.4989C3.49172 14.4847 3.41898 14.4847 3.34844 14.4989C3.31344 14.5061 3.27898 14.5164 3.24617 14.5301C3.21336 14.5438 3.18109 14.5607 3.15156 14.5804C3.12148 14.6001 3.09359 14.6231 3.06844 14.6482C3.04328 14.6734 3.02031 14.7013 3.00062 14.7314C2.98094 14.7609 2.96398 14.7926 2.95031 14.826C2.93664 14.8588 2.92625 14.8932 2.91914 14.9282C2.91203 14.9632 2.9082 14.9993 2.9082 15.0349C2.9082 15.0704 2.91203 15.1065 2.91914 15.1421C2.92625 15.1765 2.93664 15.211 2.95031 15.2443C2.96398 15.2771 2.98094 15.3089 3.00062 15.3384C3.02031 15.3685 3.04328 15.3964 3.06844 15.4215C3.09359 15.4467 3.12148 15.4696 3.15156 15.4899C3.18109 15.5096 3.21336 15.5265 3.24617 15.5402C3.27898 15.5539 3.31344 15.5643 3.34844 15.5714C3.38398 15.5785 3.41953 15.5818 3.45508 15.5818C3.49117 15.5818 3.52672 15.5785 3.56227 15.5714C3.59727 15.5643 3.63117 15.5539 3.66453 15.5402C3.69734 15.5265 3.72906 15.5096 3.75859 15.4899C3.78867 15.4696 3.81656 15.4467 3.84227 15.4215C3.86742 15.3964 3.88984 15.3685 3.91008 15.3384C3.92977 15.3089 3.94672 15.2771 3.96039 15.2443C3.97406 15.211 3.98445 15.1765 3.99156 15.1421C3.99867 15.1065 4.00195 15.0704 4.00195 15.0349C4.00195 14.9993 3.99867 14.9632 3.99156 14.9282C3.98445 14.8932 3.97406 14.8588 3.96039 14.826Z" />
</svg>

const Notification = (props) => {
    return (
        <div className="relative">
            { props.notifications.length > 0 ?
                <div className="bg-gray-dark text-2xs absolute right-0 px-1 rounded-lg transform -translate-y-2">{props.notifications.length}</div>:""
            }
            <Dropdown name={icon} right={true} hoverable>
                <div className="flex flex-col">
                    {props.notifications.map(notifiction => 
                        <p className="pb-2 border-b border-gray-mid">{notifiction}</p>
                    )}
                </div>
            </Dropdown>
        </div>
    );
}

export default Notification;