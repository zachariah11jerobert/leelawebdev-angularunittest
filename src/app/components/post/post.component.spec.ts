import { Post } from "src/app/models/Post";
import { PostComponent } from "./post.component";
import { first } from "rxjs";

describe('Post Component', () => {
    it('should raise an event when the delete post is clicked', () => {
        const comp = new PostComponent();
        const post:Post={id:1,body:'body 1',title:'any title'};
        comp.post=post;
        comp.delete.pipe(first()).subscribe((selectedPost)=>{
            expect(selectedPost).toBe(post);
        });

        comp.onDeletePost(new MouseEvent('click'));
    });
})