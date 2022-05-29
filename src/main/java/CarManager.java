import java.util.Date;
import java.util.List;

public class CarManager extends Customer{

    private String username;
    private String password;

    public CarManager(String firstName, String lastName, Date dob, String driversLicenseNum, String email, List<Reservation> reservation, String username, String password){
        super(firstName, lastName, dob, driversLicenseNum, email, reservation);
        this.username = username;
        this.password = password;
    }

    public Vehicle addCar(){
        return Vehicle;
    }

    public void removeCar(Vehicle vehicle){
    
    }

    public void login(){

    };
}
