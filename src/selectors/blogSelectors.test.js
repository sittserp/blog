import { countBlogs, getBlogs } from './BlogSelectors';

describe('blog selectors', () => {
  it('selects the list of blogs from state', () => {
    const state = {
      blogs: [{
      
        title: 'My Dog Pal',
        body: 
            `Arthur was so excited when he started his pet business 
            watching other people's animals! When he watched Perky, 
            he had a hard time taking care of her, but then she had puppies, 
            and he got to keep one! That's how he got his puppy, Pal.`
      }]
    };
        
    const blogs = getBlogs(state);

    expect(blogs).toEqual([{
      
      title: 'My Dog Pal',
      body: 
            `Arthur was so excited when he started his pet business 
            watching other people's animals! When he watched Perky, 
            he had a hard time taking care of her, but then she had puppies, 
            and he got to keep one! That's how he got his puppy, Pal.`
    }]);
  });

  // I feel like this could be useful later
  it('selects the number of blogs', () => {
    const state = {
      blogs: [{
        
        title: 'My Dog Pal',
        body: 
              `Arthur was so excited when he started his pet business 
              watching other people's animals! When he watched Perky, 
              he had a hard time taking care of her, but then she had puppies, 
              and he got to keep one! That's how he got his puppy, Pal.`
      }]
    };

    expect(countBlogs(state)).toEqual(1);
  });
});
