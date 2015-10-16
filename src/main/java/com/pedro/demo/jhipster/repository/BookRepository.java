package com.pedro.demo.jhipster.repository;

import com.pedro.demo.jhipster.domain.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Book entity.
 */
public interface BookRepository extends MongoRepository<Book,String> {

}
