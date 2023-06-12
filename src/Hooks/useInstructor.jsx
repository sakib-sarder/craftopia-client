import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading:isInstructorLoading} = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            if (!user) {
                return false;
            }
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log("is ins", res.data);
            return res.data.instructor;
        }
    })
    return [isAdmin, isInstructorLoading]

};

export default useInstructor;