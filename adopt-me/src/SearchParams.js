import { useState } from 'react';

const SearchParams = () => {
  const ANIMALS = ['bird', 'cats', 'dog', 'rabbit', 'reptile'];

  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');

  const breeds = [];

  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          Location
          <input
            type='text'
            id='location'
            value={location}
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            name='animal'
            id='animal'
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select
            name='breed'
            id='breed'
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((allBreed) => (
              <option key={allBreed} value={allBreed}>
                {allBreed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
