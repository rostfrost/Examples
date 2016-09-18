package service;

import model.Contract;
import model.dao.ContractDaoImpl;
import java.util.ArrayList;
import java.util.List;

/**
 * Pasechnikov Rostislav
 * 17.09.2016
 */
public class ContractServiceImpl implements ContractService {
    private String seriesNumber;
    private String typeContract;
    private String dateSigning;
    private String dataBeginning;
    private String endDate;
    private int sumWithoutNds;
    private int  rateNds;
    private int sumNds;
    private int sumWithNds;
    private boolean conformity;
    private String numberTs;
    private String note;
    private ContractDaoImpl contractDao;

    public String getTypeContract() {
        return typeContract;
    }

    public void setTypeContract(String typeContract) {
        this.typeContract = typeContract;
    }

    public String getSeriesNumber() {
        return seriesNumber;
    }

    public void setSeriesNumber(String seriesNumber) {
        this.seriesNumber = seriesNumber;
    }

    public String getDateSigning() {
        return dateSigning;
    }

    public void setDateSigning(String dateSigning) {
        this.dateSigning = dateSigning;
    }

    public String getDataBeginning() {
        return dataBeginning;
    }

    public void setDataBeginning(String dataBeginning) {
        this.dataBeginning = dataBeginning;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getSumNds() {
        return sumNds;
    }

    public void setSumNds(int sumNds) {
        this.sumNds = sumNds;
    }

    public boolean isConformity() {
        return conformity;
    }

    public void setConformity(boolean conformity) {
        this.conformity = conformity;
    }

    public int getSumWithNds() {
        return sumWithNds;
    }

    public void setSumWithNds(int sumWithNds) {
        this.sumWithNds = sumWithNds;
    }

    public String getNumberTs() {
        return numberTs;
    }

    public void setNumberTs(String numberTs) {
        this.numberTs = numberTs;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getSumWithoutNds() {
        return sumWithoutNds;
    }

    public void setSumWithoutNds(int sumWithoutNds) {
        this.sumWithoutNds = sumWithoutNds;
    }

    public int getRateNds() {
        return rateNds;
    }

    public void setRateNds(int rateNds) {
        this.rateNds = rateNds;
    }

    public ContractServiceImpl() {
    }

    public ContractServiceImpl(String seriesNumber, String typeContract, String dateSigning, String dataBeginning,
                               String endDate, int sumWithoutNds, int rateNds, int sumNds,
                               int sumWithNds, boolean conformity, String numberTs, String note) {
        this.seriesNumber = seriesNumber;
        this.typeContract = typeContract;
        this.dateSigning = dateSigning;
        this.dataBeginning = dataBeginning;
        this.endDate = endDate;
        this.sumWithoutNds = sumWithoutNds;
        this.rateNds = rateNds;
        this.sumNds = sumNds;
        this.sumWithNds = sumWithNds;
        this.conformity = conformity;
        this.numberTs = numberTs;
        this.note = note;
    }
    @Override
    public List getAll(List<Contract> contracts){
        List<ContractServiceImpl> contractsService = new ArrayList<ContractServiceImpl>();
        for (Contract contract: contracts) {
            ContractServiceImpl contractServiceImpl = new ContractServiceImpl(
                    contract.getSeries()+'-'+contract.getNumber(),
                    contract.getTypeContract(),
                    contract.getDateSigning(),
                    contract.getDataBeginning(),
                    contract.getEndDate(),
                    contract.getSumWithNds()-contract.getSumNds(),
                    contract.getSumNds()/((contract.getSumWithNds()-contract.getSumNds())/100),
                    contract.getSumNds(),
                    contract.getSumWithNds(),
                    contract.getConformity(),
                    contract.getNumberTs(),
                    contract.getNote()
            );
            contractsService.add(contractServiceImpl);
        }
        return contractsService;
    }

    public void setContractDao(ContractDaoImpl contractDao) {
        this.contractDao = contractDao;
    }

    public ContractDaoImpl getContractDao() {
        return contractDao;
    }
}
