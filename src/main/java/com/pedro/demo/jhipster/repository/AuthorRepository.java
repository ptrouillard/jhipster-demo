package com.pedro.demo.jhipster.repository;

import com.pedro.demo.jhipster.domain.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Author entity.
 */
public interface AuthorRepository extends MongoRepository<Author,String> {

}
