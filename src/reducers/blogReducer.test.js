import { createBlog, deleteBlog } from '../actions/blogActions';
import reducer from './blogReducer';

describe('blog reducer', () => {
  it('makes a new blow w/ CREATE_BLOG action', () => {
    const state = {
      blogs: []
    };
        
    const action = createBlog({
      title: 'My Dog Pal',
      body: 
            `Arthur was so excited when he started his pet business 
            watching other people's animals! When he watched Perky, 
            he had a hard time taking care of her, but then she had puppies, 
            and he got to keep one! That's how he got his puppy, Pal.`
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{

        title: 'My Dog Pal',
        body: 
            `Arthur was so excited when he started his pet business 
            watching other people's animals! When he watched Perky, 
            he had a hard time taking care of her, but then she had puppies, 
            and he got to keep one! That's how he got his puppy, Pal.`
      }]
    });
  });
});
