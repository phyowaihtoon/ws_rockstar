interface Post {
	id : number;
	content : String;
	user : {
		id : number;
		name : String;
		username : String;
		bio : String;
	}
}

export default Post;