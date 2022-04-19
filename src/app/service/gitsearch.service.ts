import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Repo } from '../model/repo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  user:User; 
	repository:Repo; 
	repos:any = []; 
	newUserData :any = []; 

  	constructor(private http: HttpClient) { 
  		this.user = new User("","","");
  		this.repository = new Repo("",new Date(),""); 		
  	}


	getUserData(username: string){

		this.repos.length = 0;
    
		interface ApiResponse{
	        bio:string,
	        public_repos:number,
	        login:string,
	        avatar_url:string,
	        created_at:Date, 
	        updated_at:Date,
	        name:string,
	        full_name:string, 
	        html_url:string   
	    }

	    let promise = new Promise((resolve,reject)=>{
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            this.user.bio=response!.bio;
	            this.user.avatar_url=response!.avatar_url;
	            this.user.login=response!.login;

	            // resolve()
	        },
	        error=>{
	                reject(error)
	            }
	        )

	        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
	        	for(var i=0; i<response.length; i++)
	        	{
	        		
	        		this.newUserData = new Repo(response[i].name,response[i].created_at,response[i].description);
	        		this.repos.push(this.newUserData);
	        	}

	            // resolve()

	        },
	        error=>{
                reject(error)
            }
	        )
	    })

	    return promise
	}

  
}
