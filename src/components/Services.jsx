import { IoMdBug } from "react-icons/io";
import { FaFileWaveform } from "react-icons/fa6";
import { GiComputerFan } from "react-icons/gi";
import PropTypes from "prop-types";

const serviceList = [
	{
		color: "blue",
		icon: IoMdBug,
		title: "Bug Bounty",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		color: "green",
		icon: FaFileWaveform,
		title: "VDP",
		description:
			"It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
	},
	{
		color: "yellow",
		icon: GiComputerFan,
		title: "Pentesting",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
	},
];

const ServiceItem = ({ service }) => {
	const IconComponent = service.icon;
	return (
		<div className="bg-white h-full shadow-xl rounded-[20px] p-6 lg:px-6 lg:py-12">
			<div
				className="w-24 h-24 rounded-full text-3xl inline-flex justify-center items-center mb-6 bg-gray-100 text-black"
			>
				<IconComponent />
			</div>
			<h4 className="font-medium text-2xl mb-4 text-black">{service.title}</h4>
			<p className="text-black opacity-80">{service.description}</p>
		</div>
	);
};

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Services = () => {
	return (
		<section className="ezy__service2 light py-14 md:py-24 bg-white text-black">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 md:mb-12">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6 text-black">
							Services We Provide
						</h2>
						<p className="text-lg opacity-80 text-black">
						A unified cybersecurity platform offering Bug Bounty, VDP, and Penetration Testing services to help organizations identify, report, and remediate vulnerabilities through ethical hacking and expert-driven security assessments.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-6 text-center pt-12">
					{serviceList.map((service, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<ServiceItem service={service} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;