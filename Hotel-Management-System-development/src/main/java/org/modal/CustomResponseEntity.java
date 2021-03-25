package org.modal;

import org.training.entity.Hotel;

public class CustomResponseEntity {
	
	private int status;
	private Object content; // will have account details of inserted, updated, deleted
	private String reason;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Object getContent() {
		return content;
	}
	public void setContent(Object content) {
		this.content = content;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public CustomResponseEntity() {
		// TODO Auto-generated constructor stub
	}
	public CustomResponseEntity(int status, Object content, String reason) {

		this.status = status;
		this.content = content;
		this.reason = reason;
	}
	
	
	
	
	

}
