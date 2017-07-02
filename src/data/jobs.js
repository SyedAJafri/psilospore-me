import jibeIcon from '../icons/jibe.png';
import itgIcon from '../icons/itg.png';
import alertusIcon from '../icons/alertus.png'

const JOBS_DATA = [{
		header: "Incentive Technology Group",
		subheader: "Applications Developer",
		date: 'April 2016 to current',
		icon: itgIcon,
		description: `
		Full stack web development using Angular 2, Java, Spring Framework, and Hibernate in an agile setting. Currently involved with a 5 year contract to modernize the GSA's federal acquisition system ASSIST which handles $7 billion in transactions annually. Development efforts I’ve worked on have involved: creating an SPA to associate and id contracts, development of our integeragency agreements SPA, integrating 2 legacy apps to use our modernized API to meet federal requirements, migrating from SVN to git with a feature based git branching model based on git flow customized to include multiple release branches, creating a more strict code review process based on pull requests between feature and release branches, and integrated HSQLDB an in-memory db we used for consistent unit tests.
        `
	},
	{
		header: "Jibe",
		subheader: "Software Engineer Intern",
		date: 'May 2015 to December 2015',
		icon: jibeIcon,		
		description: `
        Developed browser automated tests for our continuous integration solution. The system would simulate an applicant applying for a job while using various functions on our client’s sites reporting any bugs to JIRA. Also maintained an older automated testing solution for our previous product.
        `
	},
	{
		header: "Alertus Technologies",
		subheader: "Software Tester & Developer",
		date: 'April 2013 to May 2015',
		icon: alertusIcon,		
		description: `
        Functional testing and unit testing through JUnit. Product and software documentation using Wikimedia. Developed a linux client in Python that receives and renders alerts using PySide. Partially developed the same client in Java using JavaFX and Swing.
        `
	}
]
export default JOBS_DATA;
