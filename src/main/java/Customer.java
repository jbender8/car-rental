// Skeleton Code
// Customer.java
// SE430 Group 10

package SkeletonCode;
import java.util.Date;
import java.util.List;

public class Customer{
    private String firstName;
    private String lastName;
    private Date dob;
    private String driversLicenseNum;
    private String email;
    private List<Reservation> reservations;

    public Customer(String firstName, String lastName, Date dob, String driversLicenseNum, String email, List<Reservation> reservations){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.driversLicenseNum = driversLicenseNum;
        this.email = email;
        this.reservations = reservations;
    }

    public Reservation makeReservation(){
        return makeReservation;

    }

    public void editReservation(Reservation r){

    }

    public void cancelReservation(Reservation r){

    }
}