package model.dao;

import model.Contract;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Pasechnikov Rostislav
 * 16.09.2016
 */
public class ContractDaoImpl implements ContractDao{
    private DriverManagerDataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    public List<Contract> getAll() {
        String SQL = "select * from ContractFinal";
        List<Contract> contracts = jdbcTemplate.query(SQL,
                new ParameterizedRowMapper<Contract>() {
                    @Override
                    public Contract mapRow(ResultSet rs, int rowNum) throws SQLException {
                        Contract contract = new Contract();
                        contract.setSeries(rs.getString("Series"));
                        contract.setNumber(rs.getString("Number"));
                        contract.setTypeContract(rs.getString("TypeContract"));
                        contract.setDateSigning(rs.getString("DateSigning"));
                        contract.setDataBeginning(rs.getString("DataBeginning"));
                        contract.setEndDate(rs.getString("EndDate"));
                        contract.setSumNds(rs.getInt("SumNds"));
                        contract.setSumWithNds(rs.getInt("SumWithNds"));
                        contract.setConformity(rs.getBoolean("Conformity"));
                        contract.setNumberTs(rs.getString("NumberTs"));
                        contract.setNote(rs.getString("Note"));
                        return contract;
                    }
                });
        return contracts;
    }

    public void add(Contract contract) {

    }

    public void update(Contract contract) {

    }

    public void delete(Contract contract) {

    }

    public void setDataSource(DriverManagerDataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public DriverManagerDataSource getDataSource() {
        return dataSource;
    }
}
