export class PostsService {
  }

  getAllPosts() : Observable<Postagem[]> {
    
        return this.http.get<Postagem[]>('https://nubiaferrdrinks.herokuapp.com/posts', this.token)
  }

  postPostagem(post: Postagem): Observable<Postagem>{
   
    return this.http.post<Postagem>('https://nubiaferrdrinks.herokuapp.com/posts', post, this.token)
  }
}