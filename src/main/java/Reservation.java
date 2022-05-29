// Skeleton Code
// Reservation.java
// SE430 Group 10

package SkeletonCode;
import java.sql.Time;
import java.util.Date;

public class Reservation{
    private Date startDate;
    private Date endDate;
    private Time pickupTime;
    private Time returnTime;
    private int resNum;
    private Vehicle vehicle;
    private Customer customer;

    public Reservation(Date startDate, Date endDate, Time pickupTime, Time returnTime, int resNum, Vehicle vehicle, Customer customer){
        this.startDate = startDate;
        this.endDate = endDate;
        this.pickupTime = pickupTime;
        this.returnTime = returnTime;
        this.resNum = resNum;
        this.vehicle = vehicle;
        this.customer = customer;
    }
}
