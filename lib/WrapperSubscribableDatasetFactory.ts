import { DatasetFactory, BaseQuad, Dataset } from "rdf-js";
import WrapperSubscribableDataset from "./WrapperSubscribableDataset";

export default class WrapperSubscribableDatasetFactory<
  InAndOutQuad extends BaseQuad = BaseQuad
> implements DatasetFactory<InAndOutQuad, InAndOutQuad> {
  private datasetFactory: DatasetFactory<InAndOutQuad, InAndOutQuad>;
  constructor(datasetFactory: DatasetFactory<InAndOutQuad, InAndOutQuad>) {
    this.datasetFactory = datasetFactory;
  }

  dataset(
    quads?: Dataset<InAndOutQuad, InAndOutQuad> | InAndOutQuad[]
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    return new WrapperSubscribableDataset(
      this.datasetFactory,
      quads ? this.datasetFactory.dataset(quads) : undefined
    );
  }
}