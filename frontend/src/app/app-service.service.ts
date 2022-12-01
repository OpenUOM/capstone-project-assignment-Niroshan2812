import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    if(environment.production == false){
      this.ROOT_URL = 'http://localhost:8080'
    }else{
      this.ROOT_URL = 'api'
    }
  }

  initializeDB(){
    return this.http.get(`/${this.ROOT_URL}'/api/dbinitialize`)
  }

  getTeacherData(){
    return this.http.get(`/${this.ROOT_URL}'/api/listTeachers`)
  }

  getStudentData(){
    return this.http.get(`/${this.ROOT_URL}'/api/listStudents`)
  }

  getOneStudentData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/getTeacherInfo`, payload)
  }

  addTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/addTeacher`, payload)
  }

  deleteTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/deleteTeacher`, payload)
  }

  editTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/editTeacher`, payload)
  }

  editStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/editStudent`, payload)
  }

  addStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/addStudent`, payload)
  }

  deleteStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}'/api/deleteStudent`, payload)
  }
}