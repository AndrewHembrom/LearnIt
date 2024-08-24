import React, { useEffect, useState } from 'react'
import './CourseDescription.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseData } from '../../context/CourseContext';
import { MdDescription } from 'react-icons/md';
import toast from 'react-hot-toast';
import { UserData } from '../../context/UserContext';

const CourseDescription = ({ user }) => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { fetchUser } = UserData();

    const { fetchCourse, course } = CourseData();

    useEffect(() => { 
        fetchCourse(params._id);
    },[])

    const checkoutHandler = async() => { 
        const token = localStorage.getItem("token");
        setLoading(true);

        const { data: { order } } = await axios.post(`${server}/api/course/checkout/${params.id}`, {}, {
            token,
        });

        const options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "LearnIt", //your business name
            "description": "Learn with us",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

            hadnler: async function (response) { 
                const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

                try {
                    const { data } = await axios.post(`${server}/api/verification/${params.id}`, {
                        razorpay_order_id, razorpay_payment_id, razorpay_signature
                    }, {
                        headers: {
                            token
                        }
                    });

                    await fetchUser()
                } catch (error) {
                    toast.error(error.response.data.message);
                    setLoading(false);
                }
            }
        }
    }

  return (
      <>
          {course && <div className='course-description'>
              <div className="course-header">
                  <img src={`${server}/${course.image}`} alt="" className='course-image' />
                  <div className="course-info">
                      <h2>{course.title}</h2>
                      <p>Instructor: {course.createdBy}</p>
                      <p>Duration: {course.duration}</p>
                  </div>
                  <p>Let's get started with course At {course.price}</p>
                  
                  { 
                      user && user.subscription.includes(course._id) ? (
                          <button onClick={()=>{navigate(`/course/study/${course._id}`)}} className='common-btn'>Study</button>
                      ) : (
                              <button onClick={checkoutHandler} className='common-btn'>Buy Now</button>
                      )
                  }
            </div>
          </div>}
      </>
  )
}

export default CourseDescription
