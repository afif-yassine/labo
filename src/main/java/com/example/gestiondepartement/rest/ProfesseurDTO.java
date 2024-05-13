package com.example.gestiondepartement.rest;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

public class ProfesseurDTO {

    private Long id;

    private String nom ;

    @Getter
    @Setter
    private String chatpassword;

    private String prenom ;
    private String email ;
    private String numero ;
    private String status ;
    private Boolean isadmin;
    private Boolean ischef;
    private Long idequipe;
    private boolean active;

    private String password;




    public boolean isActive() {
        return active;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Boolean getIsadmin() {
        return isadmin;
    }

    public void setIsadmin(Boolean isadmin) {
        this.isadmin = isadmin;
    }

    public Boolean getIschef() {
        return ischef;
    }

    public void setIschef(Boolean ischef) {
        this.ischef = ischef;
    }

    public Long getIdequipe() {
        return idequipe;
    }

    public void setIdequipe(Long idequipe) {
        this.idequipe = idequipe;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
}
