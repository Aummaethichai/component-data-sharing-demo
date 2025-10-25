// const Cart = (props) => {
//     const dataProfile = props.dataProfile;
//     console.log('====================================');
//     console.log(dataProfile);
//     console.log('====================================');
//     return ( 
//         <div>
//             Cart Component
//         </div>
//      );
// }
// export default Cart;

import Image from "next/image";
import dayjs from "dayjs";

type CartProps = {
    dataProfile: {
        id: number;
        img: string;
        name: string;
        birth: string;
        city: string;
        email: string;
        likes: number;
        photos: number;
    }[];
}

const Cart = ({ dataProfile }: CartProps) => {
    const formatDate = (dateString: string) => {
        const age = dayjs().diff(dayjs(dateString), 'year');
        return age;
    }
    return (
        <div className="flex flex-col justify-center w-full h-full items-center ">
            <h1 className="">Profile Card</h1>
            {dataProfile.map((val) => (
                <div key={val.id} className="flex flex-col justify-center items-center border p-4 m-4 rounded-lg shadow-lg bg-white gap-1">
                    <h3 className="text-cyan-800">{val.name}</h3>
                    <Image src={val.img} width={200} height={200} alt="Profile Image" />
                    {/* <h4>{val.name}</h4> */}
                    <p>Age: {formatDate(val.birth)}</p>
                    <p>City: {val.city}</p>
                    <p>Email: {val.email}</p>
                    <p>Likes: {val.likes}</p>
                    <p>Photos: {val.photos}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;