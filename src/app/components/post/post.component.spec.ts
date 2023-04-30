import { Post } from "src/app/models/Post";
import { PostComponent } from "./post.component";
import { first } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe('Post Component', () => {
    let fixture: ComponentFixture<PostComponent>;
    let comp: PostComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostComponent]
        });

        fixture = TestBed.createComponent(PostComponent);
        comp = fixture.componentInstance;
    });

    it('should create post componnet using TestBed', () => {
        expect(comp).toBeDefined();
    });

    it('should render the post title in the anchor element', () => {
        const post: Post = { id: 1, body: 'body 1', title: 'any title' };
        comp.post = post;
        fixture.detectChanges();
        const postElement: HTMLElement = fixture.nativeElement;
        const a = postElement.querySelector('a');
        expect(a?.textContent).toContain(post.title);
    });

    it('should render the post title in the anchor element using debug element', () => {
        const post: Post = { id: 1, body: 'body 1', title: 'any title' };
        comp.post = post;
        fixture.detectChanges();
        const postDebugElement = fixture.debugElement;
        const aElement: HTMLElement = postDebugElement.query(By.css('a')).nativeElement;
        expect(aElement.textContent).toContain(post.title);
    });


    it('should raise an event when the delete post is clicked', () => {
        const post: Post = { id: 1, body: 'body 1', title: 'any title' };
        comp.post = post;
        comp.delete.pipe(first()).subscribe((selectedPost) => {
            expect(selectedPost).toBe(post);
        });

        comp.onDeletePost(new MouseEvent('click'));
    });
})