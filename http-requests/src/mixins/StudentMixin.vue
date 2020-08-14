<script>
  const apiUrl = `https://node-student-server.herokuapp.com/students`;
export default {
    methods:{
        submitStudent(studentData){
           return this.$http.post(apiUrl, studentData);
        },
        loadStudents(){
            return this.$http.get(apiUrl).then(res => res.json());
        },
        updateStudent(id, studentData){
            return this.$http.put( `${apiUrl}/${id}`, studentData);
        },
        removeStudent(id){
                 return this.$http.delete(`${apiUrl}/${id}`);
        }
      
    }
}
</script>