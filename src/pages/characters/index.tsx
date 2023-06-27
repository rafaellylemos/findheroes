'use client';

import api from "@/services/api";
import React, { useEffect, useState } from "react";
import { ButtonContainer, Container, Form, Search, Title } from './styles';

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<ResponseData[]>([]);
  
    useEffect(() => {
      api.get("/characters")
        .then((response) => {
          setCharacters(response.data.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      const results = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    };
  
    const resetSearch = () => {
      setSearchTerm("");
      setSearchResults([]);
    };
  
    const renderCharacters = () => {
      if (!searchTerm) {
        return null;
      }
  
      /*if (searchResults.length === 0) {
        return <p className="NoResults">Nada por aqui.</p>;
      }*/
  

      return (
        <ul>
          {searchResults.map((character) => (
            <li key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={`Foto do ${character.name}`}
              />
              <span className="name">{character.name}</span>
              <span className="description">{character.description}</span>
            </li>
          ))}
        </ul>
      );
    };
  
    return (
      <Container>
      <Title>Encontre seu herói Marvel!</Title>
      <Form onSubmit={handleSearch}>
        <Search>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ex: Spider-Man"
          />
        </Search>
        <ButtonContainer>
          <button type="submit">Pesquisar</button>
        </ButtonContainer>
        <ButtonContainer>
          <button type="button" onClick={resetSearch}>
            Limpar Pesquisa
          </button>
        </ButtonContainer>
      </Form>
      {renderCharacters()}
    </Container>
    );
  };
  
  export default Characters;
  