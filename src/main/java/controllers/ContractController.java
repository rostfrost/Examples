package controllers;

import model.dao.ContractDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.ContractServiceImpl;

import java.util.List;

/**
 * Pasechnikov Rostislav
 * 17.09.2016
 */

@Controller
@RequestMapping("/contract")
public class ContractController {

    @Autowired
    private ContractDaoImpl contractDao;

    @Autowired
    private ContractServiceImpl contractServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List getAll() {
        return contractServiceImpl.getAll(contractDao.getAll());
    }


    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public boolean setContract(@RequestBody ContractServiceImpl contract) {

        contractServiceImpl.add(contract);
        return true;
    }
}
