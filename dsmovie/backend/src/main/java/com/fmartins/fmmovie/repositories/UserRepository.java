package com.fmartins.fmmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmartins.fmmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
User findByEmail(String email);
}
