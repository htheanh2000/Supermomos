"use client"
import Container from "@/components/container"
import CustomDatePicker from "@/components/datepicker"
import Icon from "@/components/icon"
const CreateSocialPage = () => {
    return (
        <Container className="mt-32">
           <h1 className="text-heading text-white bg-purple w-fit py-1 px-3">Untitle Event</h1> 
           <div className="mt-8 flex">
                <div className="flex items-center">
                        <Icon size='lg' name="calendar"/>
                        <CustomDatePicker className=" max-w-[11rem] w-44 ml-4"/>
                </div>
                <div className="flex items-center ml-4">
                        <Icon size='lg' name="clock"/>
                        <CustomDatePicker 
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        showTimeSelect showTimeSelectOnly placeholderText="Time" className="max-w-[11rem] w-44 ml-4"/>
                </div>
           </div>
        </Container>
    )
}

export default CreateSocialPage