package com.example;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

/**
 * Servlet implementation class ViewProfileServlet
 */
@WebServlet("/viewprofile")
public class ViewProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewProfileServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
		response.setCharacterEncoding("UTF-8");
		//int studentId = Integer.parseInt(request.getParameter("studentId")); 
		
		List<StudentProfile> students = new ArrayList<>();
		try {
			Connection conn = Databaseconnection.getConnection();
			// Fetch student profile details
			String sqlStudent = "SELECT * FROM students "; 
			PreparedStatement statementStudent = conn.prepareStatement(sqlStudent);
			int stuid=0;
			ResultSet resultSetStudents = statementStudent.executeQuery();
			 while (resultSetStudents.next()) {
				 StudentProfile profile = new StudentProfile();
			 
			
			
				profile.setStudentId(resultSetStudents.getInt("student_id"));
				stuid= profile.getStudentId();
				profile.setUserId(resultSetStudents.getInt("user_id")); 
				profile.setProfileDetails(resultSetStudents.getString("profile_details"));
				profile.setEligibilityStatus(resultSetStudents.getBoolean("eligibility_status"));
				
		 // Fetch student academic details 
			String sqlAcademics = "SELECT * FROM student_academics WHERE student_id = ?";
			PreparedStatement statementAcademics = conn.prepareStatement(sqlAcademics);
			statementAcademics.setInt(1, stuid);
			
			ResultSet resultSetAcademics = statementAcademics.executeQuery(); 
			
			if (resultSetAcademics.next())
			{ profile.setAcademicId(resultSetAcademics.getInt("academic_id")); 
			profile.setLiveBacklogs(resultSetAcademics.getInt("live_backlogs"));
			profile.setDeadBacklogs(resultSetAcademics.getInt("dead_backlogs"));
			profile.setCgpa(resultSetAcademics.getBigDecimal("cgpa"));
			profile.setPercentage10th(resultSetAcademics.getBigDecimal("percentage_10th"));
			profile.setPercentage12th(resultSetAcademics.getBigDecimal("percentage_12th"));
			profile.setBranchName(resultSetAcademics.getString("branch_name"));
			profile.setHasInternship(resultSetAcademics.getBoolean("has_internship"));
			//profile.setProfilePicture(resultSetAcademics.getBytes("profile_picture"));
			profile.setContactNo(resultSetAcademics.getString("contact_no")); }
			students.add(profile);
			 }
			conn.close(); }
		catch (Exception e) 
		{ e.printStackTrace(); }
		String json = new Gson().toJson(students);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8"); 
		response.getWriter().write(json);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
	}
	private class StudentProfile
	{ private int studentId;
	private int userId; 
	private String profileDetails; 
	private boolean eligibilityStatus; 
	private int academicId; 
	private int liveBacklogs; 
	private int deadBacklogs;
	private BigDecimal cgpa;
	private BigDecimal percentage10th;
	private BigDecimal percentage12th; 
	private String branchName; 
	private boolean hasInternship;
	private byte[] profilePicture; 
	private String contactNo;
	// Getters and setters
	public int getStudentId() { return studentId; }
	public void setStudentId(int studentId) { this.studentId = studentId; } 
	public int getUserId() { return userId; } 
	public void setUserId(int userId) { this.userId = userId; }
	public String getProfileDetails() { return profileDetails; }
	public void setProfileDetails(String profileDetails)
	{ this.profileDetails = profileDetails; }
	public boolean isEligibilityStatus() { return eligibilityStatus; } 
	public void setEligibilityStatus(boolean eligibilityStatus) { this.eligibilityStatus = eligibilityStatus; }
	public int getAcademicId() { return academicId; } 
	public void setAcademicId(int academicId) { this.academicId = academicId; }
	public int getLiveBacklogs() { return liveBacklogs; }
	public void setLiveBacklogs(int liveBacklogs) { this.liveBacklogs = liveBacklogs; }
	public int getDeadBacklogs() { return deadBacklogs; }
	public void setDeadBacklogs(int deadBacklogs) { this.deadBacklogs = deadBacklogs; }
	public BigDecimal getCgpa() { return cgpa; }
	public void setCgpa(BigDecimal cgpa) { this.cgpa = cgpa; } 
	public BigDecimal getPercentage10th() { return percentage10th; }
	public void setPercentage10th(BigDecimal percentage10th) { this.percentage10th = percentage10th; } 
	public BigDecimal getPercentage12th() { return percentage12th; }
	public void setPercentage12th(BigDecimal percentage12th) { this.percentage12th = percentage12th; } 
	public String getBranchName() { return branchName; }
	public void setBranchName(String branchName) { this.branchName = branchName; }
	public boolean isHasInternship() { return hasInternship; }
	public void setHasInternship(boolean hasInternship) { this.hasInternship = hasInternship; } 
	public byte[] getProfilePicture() { return profilePicture; } 
	public void setProfilePicture(byte[] profilePicture) { this.profilePicture = profilePicture; }
	public String getContactNo() { return contactNo; }
	public void setContactNo(String contactNo) { this.contactNo = contactNo; }
	
	
	}

}
