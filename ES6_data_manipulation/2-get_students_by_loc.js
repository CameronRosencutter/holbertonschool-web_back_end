function getStudentsByLocation(students){
  return students.filter((student) => student.location === 'San Francisco');
}

export default getStudentsByLocation;