// Skeleton Code
// Vehicle.java
// SE430 Group 10

package SkeletonCode;
import java.util.ArrayList;
import java.util.List;

public class Vehicle{
    private String model;
    private String make;
    private String year;
    private String color;
    private String licensePlateNum;
    private float pricePerDay;
    private Image photo;
    private String description;
    private String lotNumber;
    private String parkingSpaceNum;
    private Reservation reservation;


    public Vehicle(String model, String make, String year, String color, String licensePlateNum, float pricePerDay, Image photo, String description, String lotNumber, String parkingSpaceNum, Reservation reservation){
        this.model = model;
        this.make = make;
        this.year = year;
        this.color = color;
        this.licensePlateNum = licensePlateNum;
        this.pricePerDay = pricePerDay;
        this.photo = photo;
        this.description = description;
        this.lotNumber = lotNumber;
        this.parkingSpaceNum = parkingSpaceNum;
        this.reservation = reservation;
    }
}
