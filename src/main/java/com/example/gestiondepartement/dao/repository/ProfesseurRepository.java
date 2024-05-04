package com.example.gestiondepartement.dao.repository;

import com.example.gestiondepartement.dao.Professeur;
import com.example.gestiondepartement.rest.ProfesseurDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {

    List<Professeur> findByEquipe_Id(Long idequipe);

    List<Professeur> findByActiveFalse();

    Professeur findByEmail(String email);


}