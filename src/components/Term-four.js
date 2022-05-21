import { useState } from 'react';

const TermFour = ({handlePercentFour}) => {

	const [ noOfStudents, setNoOfStudents ] = useState('');
	const [ noOfStudentsPassed, setNoOfStudentsPassed ] = useState('');
	const [ percent, setPercent ] = useState(0);

	const calculatePercentage = (e) => {
		e.preventDefault();
		
		const total = noOfStudents - noOfStudentsPassed;
		handlePercentFour(total);
	}

	return <div className='term-one-form container'>
	    <h3>TERM 4</h3>
		<form onSubmit={calculatePercentage}>
		    <div className='form-group'>
		    	<input type='text' placeholder='Total number of students' value={noOfStudents} onChange={(e) => setNoOfStudents(e.target.value)} />
		    </div>
		    <div className='form-group'>
		    	<input type='text' placeholder='Total number of students who passed' value={noOfStudentsPassed} onChange={(e) => setNoOfStudentsPassed(e.target.value)} />
		    </div>
		    <div className='form-group'>
		    	<button>Calculate Percentage</button>
		    </div>
		</form>
	</div>
}

export default TermFour;