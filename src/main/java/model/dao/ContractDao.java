package model.dao;

import model.Contract;
import java.util.List;

/**
 * Pasechnikov Rostislav
 * 16.09.2016
 */
public interface ContractDao {
    public List<Contract> getAll();
    public void add(Contract contract);
    public void update(Contract contract);
    public void delete(Contract contract);
}
