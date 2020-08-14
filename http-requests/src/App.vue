<template>
  <div class="container">
    <app-overlay v-if="showLoader"></app-overlay>
    <div class="row">
      <div class="col-sm-6">
        <h1>Student Form</h1>
        <form>
            <div class="form-group">
                <label>ID Number</label>
                <input
                    class="form-control"
                    type="number" 
                    v-model="studentData.id"
                />
            </div>
            <div class="form-group">
                <label>First Name</label>
                <input
                    class="form-control"
                    type="text"
                    v-model="studentData.firstName"
                />
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input
                    class="form-control"
                    type="text"
                    v-model="studentData.lastName"
                />
            </div>
            <div class="form-group">
                <label>Age</label>
                <input
                    class="form-control" 
                    type="number" 
                    v-model="studentData.age"
                />
            </div>
            <div class="form-group">
                <label>Position</label>
                <select
                    class="form-control"
                    v-model="studentData.position"
                >
                    <option v-for="position in availablePositions" :key="position">{{ position }}</option>
                </select>
            </div>
            <button class="btn btn-primary" v-if="!isUpdating" :disabled="!enableSubmit" @click.prevent="submitForm">Submit</button>
            <button class="btn btn-primary" v-else :disabled="!enableSubmit" @click.prevent="saveChanges()"> Save </button>
            <button class="btn btn-primary" @click.prevent="resetForm">Reset</button>
        </form>
    </div>
    <div class="col-sm-6">
        <h1>Student List</h1>
        <div class="accordion" id="studentAccordion">
            <div class="card" v-for="(student, i) in students" :key="i">
              <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                      <button
                        class="btn btn-link"
                        type="button" 
                        data-toggle="collapse"
                        :data-target="'#collapse' + i"
                        aria-expanded="true"
                        :aria-controls="'collapse' + i">
                         {{ student.id }}
                      </button>
                  </h2>
              </div>

              <div
                :id="'collapse' + i" 
                class="collapse"
                aria-labelledby="headingOne" 
                data-parent="#studentAccordion">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-6">First Name:</div>
                      <div class="col-sm-6"> {{ student.firstName }} </div>
                      <div class="col-sm-6">Last Name:</div>
                      <div class="col-sm-6">{{ student.lastName }}</div>
                      <div class="col-sm-6">Age:</div>
                      <div class="col-sm-6">{{ student.age }}</div>
                      <div class="col-sm-6">Position:</div>
                      <div class="col-sm-6">{{ student.position }}</div>
                    </div>
                    <div class="card-body">
                    <button class="btn btn-primary" 
                        @click.prevent="setUpdateForm(student)"
                    >
                        Update
                    </button>
                     <button class="btn btn-primary" 
                     @click.prevent="deleteStudent(student.id)"
                    >
                        Delete
                    </button>
              </div>
                  </div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Overlay from './Overlay.vue';
    import StudentMixins from './mixins/StudentMixin.vue'

    export default {
        components: {
          appOverlay: Overlay
        },
        mixins: [StudentMixins],
        data() {
            return {
                studentData: {
                    id: 0,
                    firstName: '',
                    lastName: '',
                    age: 20,
                    position: ''
                },
                availablePositions: ['Assoc Dev', 'Developer', 'Senior Dev', 'Assoc Lead Dev', 'Lead Dev'],
                students: [],
                showLoader: false,
                isUpdating: false
            };
        },
        computed: {
          enableSubmit() {
            return this.studentData.id != 0 &&
              this.studentData.firstName !== '' &&
              this.studentData.lastName !== '' &&
              this.studentData.age != 0 &&
              this.studentData.position !== ''
          }
         
        },
        methods: {
            submitForm() {
                this.showLoader =  true;
            //   this.$http.post(apiUrl,this.studentData).then(res =>{
            //        this.showLoader =  false;
            //       console.log(res)
            //       this.resetForm();
            //   })
                this.submitStudent(this.studentData).then(res =>{
                   this.showLoader =  false;
                  console.log(res)
                  this.resetForm();
              })
            },
            resetForm() {
                this.studentData = {
                    id: 0,
                    firstName: '',
                    lastName: '',
                    age: 20,
                    position: ''
                };
                this.isUpdating =false;
            },
            loadData() {
                 this.showLoader = true;
                    this.loadStudents().then(res =>{
                       this.students = res;
                       this.showLoader = false;
                    })
            },
            setUpdateForm(student){
              
                this.studentData = {
                  id: student.id,
                  firstName: student.firstName,
                  lastName: student.lastName,
                  age: student.age,
                  position: student.position
                };
                 this.isUpdating = true;
               
            },
            saveChanges(){
                this.showLoader = true;
                this.updateStudent(this.studentData.id, this.studentData).then(res =>{
                    this.showLoader = false;
                    alert("updated");
                    console.log("updated");
                    this.loadData();
                });
            },
            deleteStudent(id) {
                this.showLoader = true;
                this.removeStudent(id).then(() =>{
                      this.showLoader = false;
                    alert("deleted");
                    console.log("delete");
                    this.loadData();
                })
            }
        },
        created : function (){
            this.loadData();
        }
    }
</script>

<style>
</style>
