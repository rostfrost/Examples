package service;

import dto.Contract;

import java.util.List;

/**
 * Pasechnikov Rostislav
 * 18.09.2016
 */
public interface ContractService {
    public List<ContractService> getAll(List<Contract> contracts);
    public void add(ContractServiceImpl contractService);
}
