package model;

/**
 * Pasechnikov Rostislav
 * 16.09.2016
 */
public class Contract {
    private String series;
    private String number;
    private String typeContract;
    private String dateSigning;
    private String dataBeginning;
    private String endDate;
    private int sumNds;
    private int sumWithNds;
    private boolean conformity;
    private String numberTs;
    private String note;

    public Contract() {
    }

    public Contract(String series, String number, String typeContract,
                    String dataBeginning, String dateSigning, String endDate,
                    int sumNds, int sumWithNds, boolean conformity, String numberTs, String note) {

        this.series = series;
        this.number = number;
        this.typeContract = typeContract;
        this.dataBeginning = dataBeginning;
        this.dateSigning = dateSigning;
        this.endDate = endDate;
        this.sumNds = sumNds;
        this.sumWithNds = sumWithNds;
        this.conformity = conformity;
        this.numberTs = numberTs;
        this.note = note;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getTypeContract() {
        return typeContract;
    }

    public void setTypeContract(String typeContract) {
        this.typeContract = typeContract;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDateSigning() {
        return dateSigning;
    }

    public void setDateSigning(String dateSigning) {
        this.dateSigning = dateSigning;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getDataBeginning() {
        return dataBeginning;
    }

    public void setDataBeginning(String dataBeginning) {
        this.dataBeginning = dataBeginning;
    }

    public int getSumNds() {
        return sumNds;
    }

    public void setSumNds(int sumNds) {
        this.sumNds = sumNds;
    }

    public int getSumWithNds() {
        return sumWithNds;
    }

    public void setSumWithNds(int sumWithNds) {
        this.sumWithNds = sumWithNds;
    }

    public boolean getConformity() {
        return conformity;
    }

    public void setConformity(boolean conformity) {
        this.conformity = conformity;
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
}
