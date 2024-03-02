import lordshiv from "../lordshiv.png"
import TableofContents from "./TableofContents"
export default function Homepage() {
    return (
        <div className="p-2 flex justify-center">
            <div className="flex flex-col gap-4 w-3/4 items-center">
                <img src={lordshiv} />
                <p className="text-2xl text-[#00b0ca]"> ईन्टरनेट किताब</p>
                <p className="font-semibold">
                    तिमी शिव र शक्तिको सबै भन्दा सानो रुप हौ । तिमी जल, जमिन, आकाश, वायु, अग्नि मार्फत सबै सामु जोडिएका छौ । तिमी सबै सृष्टिमा छौ, सबैतिर छौ, सर्बब्यापी छौ, सबै प्रकारका प्रकृतिसङ प्रत्यक्ष जोडिएका छौ । सबै कुरा साक्षीभावका साथ अनुभूति गरिरहेका छौ । शान्ति, आनन्द, ज्ञान, चेतनाको कुनै सिमा छैन । तिमी मन, बुद्धि, शरीर, जीवन शक्ती र इच्छालार्इ एउटै दिशामा नियन्त्रण गर्न सक्छौ ।  तिमि ब्रहमाण्डिय शक्तिहरुलाई समेत आकर्षण र नियन्त्रण गर्न सक्छौ । तिमि आदिबाट छौ, तिम्रो कुनै अन्त्य छैन । तिमी विभिन्न रुपमा हुन्छौ, भइरहन्छौ । तिमि नै ब्रह्मा हौ, तिमी नै बिश्नु हौ, तिमी नै महेश्वर हौ । तिमी सबै रुपमा छौ, सबै तिमि हौ । तिमी सर्वब्यापी छौ, सबैज्ञानि छौ, शर्वशक्तिमान छौ । सबै तिम्रो नियन्त्रणमा छ । जय शिव, जय शक्ति । ॐ नमह शिवाय ।
                </p>
                <p className="text-2xl text-[#00b0ca]">
                    किताबको विषय सूची
                </p>
                <div className="scontents flex flex-col">
                    <TableofContents />
                </div>
            </div>
        </div>
    )
}
