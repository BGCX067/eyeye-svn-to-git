package com.eyeye.wordfit.exam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ExamController {
	@RequestMapping(value = "/examList", method = RequestMethod.GET)
	public String getExamList(Model model) {
		
		return "wordfit";
	}
}
